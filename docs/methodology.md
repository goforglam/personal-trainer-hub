# Methodology Layer

The Method layer is the future decision engine of Personal Trainer Hub.

It should describe:

- training principles
- assessment dimensions
- goal types
- movement categories
- exercise selection rules
- regressions and progressions
- intensity and volume guidance
- recovery considerations
- session structure
- adaptation triggers
- progression criteria
- coaching cues

## Important design rule

Do not hard-code these decisions into individual pages.

Store methodology as structured data/rules so that one change can affect future program generation consistently.

## Planned decision flow

1. Read client context.
2. Read assessment.
3. Identify primary goal and constraints.
4. Select relevant methodology rules.
5. Build a candidate session/program.
6. Record what was actually completed.
7. Capture client feedback.
8. Evaluate progression/adaptation triggers.
9. Update the next recommendation.

The first implementation should start with the smallest useful rule set rather than attempting to encode the entire methodology at once.
