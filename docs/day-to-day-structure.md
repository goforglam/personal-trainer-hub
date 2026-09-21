# Personal Trainer Hub — Day-to-Day Structure

The platform must reflect the trainer's real working life, which has two fundamentally different service models:

1. Group Fitness
2. Personal Training

They belong in the same Hub because they are part of the same trainer business, but they should not use the same level of detail.

## 1. Group Fitness

Examples:
- Tae Bo
- DeepWork
- BodyART

The unit of management is primarily the class / program, not an individual participant.

### What matters

Class / Program:
- discipline
- class name
- location
- day and time
- duration
- recurring schedule
- capacity
- organiser / gym / studio
- current participant count
- class status

Session:
- date
- class
- attendance
- theme / focus
- structure
- music / playlist (optional)
- equipment
- notes
- what worked / what to change

Participant information should stay intentionally light unless a participant becomes a Personal Training client:
- name
- attendance history
- optional notes
- optional contact details

The system should not force a full assessment, program or progress record for every group participant.

## 2. Personal Training

The unit of management is the individual client.

Personal Training needs significantly more detail because the trainer is responsible for an individualised process.

### Client profile
- identity / contact
- onboarding date
- training history
- lifestyle context
- availability
- relevant constraints
- trainer notes

### Initial assessment
- objectives
- current level
- movement / physical assessment
- strengths
- limitations
- relevant history
- baseline measurements
- subjective assessment
- priorities

### Goals
- primary goal
- secondary goals
- target outcome
- target date
- priority
- success criteria
- current status

### Individual program
- program objective
- duration
- weekly frequency
- training split
- session structure
- exercise selection
- sets / reps / duration
- intensity
- progression
- regressions
- recovery considerations

### Individual session

Before:
- planned session
- readiness
- relevant context
- intended objective

During:
- exercises actually performed
- sets / reps / load / duration
- technique observations
- modifications
- coaching cues

After:
- performance
- client feedback
- perceived effort
- pain / discomfort flags where relevant
- what changed from plan
- trainer notes
- next-session implications

### Progress
- objective measurements
- performance indicators
- adherence
- subjective progress
- milestone tracking
- reassessment
- program adaptations

## Day-to-Day Dashboard

The dashboard should answer one question first:

What do I need to do today?

### Group Fitness
- today's classes
- location
- time
- discipline
- preparation notes
- attendance / expected participants

### Personal Training
- today's 1:1 sessions
- client
- time
- session objective
- readiness / key context
- last-session note
- next action

## Quick capture

The trainer should be able to record something immediately after a class or PT session without navigating through multiple screens.

Examples:
- Group class completed
- Attendance recorded
- Class note added
- PT session completed
- Client feedback recorded
- Progress metric added
- Follow-up reminder created

## Business overview

Keep business-level information separate from coaching detail:
- group classes taught this week
- PT sessions this week
- active PT clients
- upcoming sessions
- hours taught
- hours of PT
- simple revenue view later

## Navigation

Recommended top-level structure:

Today
- today's schedule
- quick capture
- priorities

Group Fitness
- Classes
- Schedule
- Attendance
- Class notes

Personal Training
- Clients
- Assessments
- Programs
- Sessions
- Progress

Exercise Library
- Exercises
- Categories
- Progressions / regressions
- Coaching cues

Method
- Principles
- Assessment rules
- Programming rules
- Progression rules
- Adaptation rules

Business
- Schedule
- Hours
- Revenue
- KPIs (later)

## Critical separation rule

A person can move from Group Fitness into Personal Training.

Tae Bo participant
→ attends classes
→ becomes interested in Personal Training
→ creates a Personal Training client profile
→ receives assessment
→ goals
→ personalised program
→ individual sessions
→ progress tracking

The participant record should therefore be able to become a richer client record without requiring the trainer to maintain two unrelated people.

The reverse should also be possible: a Personal Training client may attend group classes.

The system should recognise the person while keeping the service relationship separate.

