# Personal Trainer Hub — Architecture

## Principles

1. GitHub is the source of truth.
2. The methodology is data-driven, not scattered through UI components.
3. Trainer decisions and client data remain separate concerns.
4. Supabase is the application data layer.
5. The first UI remains useful without a database connection.
6. Lovable is reserved for visual/product iteration, not routine code generation.

## Core flow

Client profile → assessment → goals → methodology → personal plan → session → feedback → progress → adaptation

## Domains

- clients
- assessments
- goals
- exercises
- programs
- sessions
- progress
- methodology
- adaptations

## Planned roles

- trainer/admin
- client

Authentication and row-level security will be introduced with the Supabase layer.
