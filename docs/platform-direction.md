# Platform Direction

Personal Trainer Hub and My Wellbeing Hub remain separate applications while sharing the same Supabase project.

## Future product vision

The existing wellbeing capabilities can eventually become a customer-facing layer of the wider coaching ecosystem.

Potential customer journey:

Wellbeing → readiness → training → session feedback → recovery → progress

The wellbeing app should therefore be treated as a reusable product capability, not merely an internal personal dashboard.

## Separation rule

- personal-trainer-hub owns trainer workflows and trainer-specific tables.
- my-wellbeing-hub continues to own its existing wellbeing tables and application.
- Shared Supabase infrastructure does not mean shared application code.
- New Personal Trainer tables use the trainer_ prefix to make boundaries obvious.
- Authentication can eventually support a shared customer identity while each application exposes only the data it needs.

## Future integration

A later phase can connect wellbeing signals to training decisions, for example:
- readiness/recovery → session intensity
- sleep/recovery → volume guidance
- movement/adherence → program progression
- subjective feedback → adaptation rules

These integrations should be explicit and methodology-driven, not automatic assumptions.
