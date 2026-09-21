# Domain Model

The platform has one Person concept and multiple Service Relationships.

## Person

A person can participate in one or both service models.

Examples:
- Group Fitness participant
- Personal Training client
- Both

## Service relationships

### Group Fitness relationship

Lightweight and class-oriented.

Person
→ Group Fitness participation
→ Class
→ Attendance
→ Session notes

### Personal Training relationship

Individual and longitudinal.

Person
→ PT Client
→ Assessment
→ Goals
→ Program
→ Sessions
→ Progress
→ Adaptation

## Why this matters

We should not duplicate a person just because they interact with the trainer in different ways.

The distinction belongs to the service relationship, not the human being.

## Future database direction

The current trainer_clients table is a useful first foundation, but the mature model should evolve toward:

- trainer_people
- trainer_group_classes
- trainer_group_class_sessions
- trainer_group_participants
- trainer_group_attendance
- trainer_pt_clients
- trainer_assessments
- trainer_goals
- trainer_programs
- trainer_sessions
- trainer_progress

This should be designed before we expand the application data model further.

## Design principle

Group Fitness optimises for:
schedule + delivery + attendance + class quality

Personal Training optimises for:
individual context + programming + coaching + progression + adaptation
