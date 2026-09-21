-- Personal Trainer Hub
-- Phase 1 schema. Keep isolated from existing wellbeing tables with trainer_ prefixes.
-- Stored in GitHub first; apply only after schema review.

create table if not exists public.trainer_clients (
  id uuid primary key default gen_random_uuid(),
  trainer_id uuid not null references auth.users(id) on delete cascade,
  client_user_id uuid references auth.users(id) on delete set null,
  display_name text not null,
  email text,
  status text not null default 'active' check (status in ('lead','active','paused','archived')),
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists trainer_clients_trainer_id_idx on public.trainer_clients(trainer_id);
create index if not exists trainer_clients_client_user_id_idx on public.trainer_clients(client_user_id);

create table if not exists public.trainer_assessments (
  id uuid primary key default gen_random_uuid(),
  client_id uuid not null references public.trainer_clients(id) on delete cascade,
  assessed_at timestamptz not null default now(),
  assessment_type text not null,
  summary text,
  data jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);
create index if not exists trainer_assessments_client_id_idx on public.trainer_assessments(client_id);

create table if not exists public.trainer_goals (
  id uuid primary key default gen_random_uuid(),
  client_id uuid not null references public.trainer_clients(id) on delete cascade,
  goal_type text not null,
  title text not null,
  description text,
  priority smallint not null default 1 check (priority between 1 and 5),
  status text not null default 'active' check (status in ('active','achieved','paused','cancelled')),
  target_date date,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists trainer_goals_client_id_idx on public.trainer_goals(client_id);

create table if not exists public.trainer_exercises (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  category text,
  movement_pattern text,
  level text,
  instructions text,
  coaching_cues text[],
  regressions uuid[],
  progressions uuid[],
  tags text[],
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create unique index if not exists trainer_exercises_name_unique_idx on public.trainer_exercises(lower(name));

create table if not exists public.trainer_methodology_rules (
  id uuid primary key default gen_random_uuid(),
  rule_key text not null unique,
  category text not null,
  name text not null,
  description text,
  rule jsonb not null default '{}'::jsonb,
  priority integer not null default 100,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.trainer_programs (
  id uuid primary key default gen_random_uuid(),
  client_id uuid not null references public.trainer_clients(id) on delete cascade,
  name text not null,
  objective text,
  status text not null default 'draft' check (status in ('draft','active','paused','completed','archived')),
  starts_on date,
  ends_on date,
  methodology_version text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists trainer_programs_client_id_idx on public.trainer_programs(client_id);

create table if not exists public.trainer_sessions (
  id uuid primary key default gen_random_uuid(),
  program_id uuid references public.trainer_programs(id) on delete set null,
  client_id uuid not null references public.trainer_clients(id) on delete cascade,
  scheduled_at timestamptz,
  completed_at timestamptz,
  session_type text,
  planned_data jsonb not null default '{}'::jsonb,
  actual_data jsonb not null default '{}'::jsonb,
  feedback jsonb not null default '{}'::jsonb,
  status text not null default 'planned' check (status in ('planned','completed','skipped','cancelled')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists trainer_sessions_client_id_idx on public.trainer_sessions(client_id);
create index if not exists trainer_sessions_scheduled_at_idx on public.trainer_sessions(scheduled_at);

create table if not exists public.trainer_progress (
  id uuid primary key default gen_random_uuid(),
  client_id uuid not null references public.trainer_clients(id) on delete cascade,
  recorded_at timestamptz not null default now(),
  metric_key text not null,
  value_numeric numeric,
  value_text text,
  unit text,
  context jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);
create index if not exists trainer_progress_client_metric_idx on public.trainer_progress(client_id, metric_key, recorded_at desc);

alter table public.trainer_clients enable row level security;
alter table public.trainer_assessments enable row level security;
alter table public.trainer_goals enable row level security;
alter table public.trainer_exercises enable row level security;
alter table public.trainer_methodology_rules enable row level security;
alter table public.trainer_programs enable row level security;
alter table public.trainer_sessions enable row level security;
alter table public.trainer_progress enable row level security;

create policy trainer_clients_select on public.trainer_clients for select to authenticated
using (trainer_id = auth.uid() or client_user_id = auth.uid());

create policy trainer_clients_insert on public.trainer_clients for insert to authenticated
with check (trainer_id = auth.uid());

create policy trainer_clients_update on public.trainer_clients for update to authenticated
using (trainer_id = auth.uid()) with check (trainer_id = auth.uid());

create policy trainer_clients_delete on public.trainer_clients for delete to authenticated
using (trainer_id = auth.uid());

create policy trainer_assessments_access on public.trainer_assessments for all to authenticated
using (exists (select 1 from public.trainer_clients c where c.id = client_id and (c.trainer_id = auth.uid() or c.client_user_id = auth.uid())))
with check (exists (select 1 from public.trainer_clients c where c.id = client_id and (c.trainer_id = auth.uid() or c.client_user_id = auth.uid())));

create policy trainer_goals_access on public.trainer_goals for all to authenticated
using (exists (select 1 from public.trainer_clients c where c.id = client_id and (c.trainer_id = auth.uid() or c.client_user_id = auth.uid())))
with check (exists (select 1 from public.trainer_clients c where c.id = client_id and (c.trainer_id = auth.uid() or c.client_user_id = auth.uid())));

create policy trainer_programs_access on public.trainer_programs for all to authenticated
using (exists (select 1 from public.trainer_clients c where c.id = client_id and (c.trainer_id = auth.uid() or c.client_user_id = auth.uid())))
with check (exists (select 1 from public.trainer_clients c where c.id = client_id and (c.trainer_id = auth.uid() or c.client_user_id = auth.uid())));

create policy trainer_sessions_access on public.trainer_sessions for all to authenticated
using (exists (select 1 from public.trainer_clients c where c.id = client_id and (c.trainer_id = auth.uid() or c.client_user_id = auth.uid())))
with check (exists (select 1 from public.trainer_clients c where c.id = client_id and (c.trainer_id = auth.uid() or c.client_user_id = auth.uid())));

create policy trainer_progress_access on public.trainer_progress for all to authenticated
using (exists (select 1 from public.trainer_clients c where c.id = client_id and (c.trainer_id = auth.uid() or c.client_user_id = auth.uid())))
with check (exists (select 1 from public.trainer_clients c where c.id = client_id and (c.trainer_id = auth.uid() or c.client_user_id = auth.uid())));

create policy trainer_exercises_authenticated_read on public.trainer_exercises for select to authenticated using (true);
create policy trainer_methodology_authenticated_read on public.trainer_methodology_rules for select to authenticated using (true);
