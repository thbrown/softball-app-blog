---
layout: default
title: "How does the lineup simulation work?"
published: true
---

# The Simulation

While using softball.app, the scorer enters information about the result of plate appearance for players in the lineup. Each plate appearance will result in one of the following outcomes (Out, SAC, E, BB, 1B, 2B, 3B, HRi, HRo). These outcomes are mapped to a number between 0 and 4 representing the number bases the player was awarded for the result of their plate appearance:

| Result         | Bases |
| -------------- | ----- |
| Out, SAC, E, K | 0     |
| 1B, BB         | 1     |
| 2B             | 2     |
| 3B             | 3     |
| HRi, HRo       | 4     |

We can debate about how walks or sacrifices should be counted. It probably depends on what flavor of the sport you are playing. IMHO sacrifices should be counted as outs in slowpitch softball and kickball, but not baseball or fastpitch. In any event, these mapping are configurable (or will be configurable soon). So you are welcome to impose your own philosophy.

The simulation then iterates over every possible lineup running simulated games on each permutation. The historical result data that was collected is used to determine the probabilities of each player getting each result during a simulated plate appearance.

By default 1,000,000 games are simulated for each lineup. The number of runs scored in each game is averaged and recorded. After all 1 million games have been simulated for every lineup, the best scoring lineup and its corresponding estimated score are presented.

Things that are not accounted for in the simulation:

- Double/triple plays
- Stolen bases
- Players who were on base advancing more bases than the hitter