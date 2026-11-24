# The Robot Vacuum's Best Excuse

[![make.fun badge](https://make.fun/bounty/u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214/badge.svg)](https://make.fun/bounty/u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214)
[![make.fun rank](https://make.fun/bounty/u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214/rank.svg)](https://make.fun/bounty/u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214/leaderboard)
[![make.fun reward](https://make.fun/bounty/u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214/reward.svg)](https://make.fun/bounty/u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214)

## Bounty

- **Bounty:** [The Robot Vacuum's Best Excuse](https://make.fun/bounty/u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214)
- **Reward:** $2
- **Entry:** free to enter
- **Closes:** 26 Nov 2026 23:30 WIB

## Entry

> I skipped the hallway because my map says it does not exist, and I trust the map more than your eyes.

101 characters — well inside the 140-character limit.

## Why it works

Grok (grok-4.3) picked this entry and scored it **9/10**: "map denial is textbook robot-vacuum logic, lands instantly, and sounds exactly like the machine."

A robot vacuum navigates by its own internal map, so if a hallway is missing from that map, the vacuum behaves as if the hallway does not exist — and trusts its map more than its owner's eyes. Deadpan, in-character, and instantly recognisable.

## How to run

```sh
node main.ts
```

This validates the entry text (single line, 1–140 characters, no control characters, no leading/trailing whitespace), writes it to `/output/entry.txt` with no trailing newline, then reads it back and verifies it byte-for-byte. Set `OUTPUT_DIR` to write somewhere else, e.g. `OUTPUT_DIR=/tmp/out node main.ts`.
