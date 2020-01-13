---
layout: default
title: "How does the lineup optimization work?"
published: true
---

# The Optimization

While using softball.app to score a game, the scorer enters information about the result of plate appearance for players in the lineup. Each plate appearance will result in one of the following outcomes (Out, SAC, E, BB, 1B, 2B, 3B, HRi, HRo). These outcomes are mapped to a number between 0 and 4 representing the number bases the player was awarded for the result of their plate appearance:

| Result         | Bases |
| -------------- | ----- |
| Out, SAC*, E, K | 0     |
| 1B, BB*        | 1     |
| 2B             | 2     |
| 3B             | 3     |
| HRi, HRo       | 4     |

The simulation then runs simulated games on every possible lineup. During simulated games, the historical result data collectd during scoring is used to determin probabilities of any given player getting any given number of bases as the result of a simulated plate appearance.

By default, one million games are simulated for each lineup. The number of runs scored in each simulated game is averaged and recorded. After all simulated games have completed for every possible lineup, the best scoring lineup and its corresponding estimated score are delevered to the user.

![Optimized co-ed batting lineup](https://i.imgur.com/PrghHEl.png "Optimized co-ed batting lineup")

Things that are not accounted for in the simulation:

- Double/triple plays
- Stolen bases
- Players who were on base advancing more bases than the hitter

_*We can debate about how walks or sacrifices should be counted. It probably depends on what flavor of the sport you are playing. IMHO sacrifices should be counted as outs in slowpitch softball and kickball, but not baseball or fastpitch. In any event, these mapping are configurable (or will be configurable soon). So you are welcome to impose your own philosophy._