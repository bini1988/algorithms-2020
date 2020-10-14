# Сортировка массива из случайных чисел

Запуск теста:

```bash
$ node .\tests-runner\ 06-lecture\1.Sort\3.revers\
```

Сравнительная таблица:

```bash
┌────┬──────────┬────────────────────┬────────────────────┬────────────────────┬────────────────────┬────────────────────┬────────────────────┬────────────────────┬────────────────────┬────────────────────┬────────────────────┬────────────────────┬────────────────────┐
│ #  │ Test     │ BubbleSort         │ SelectionSort      │ InsertionSort      │ ShellSort I        │ ShellSort II       │ ShellSort III      │ HeapSort           │ QuickSort          │ MergeSort          │ CountingSort       │ RadixSort          │ BucketSort         │
├────┼──────────┼────────────────────┼────────────────────┼────────────────────┼────────────────────┼────────────────────┼────────────────────┼────────────────────┼────────────────────┼────────────────────┼────────────────────┼────────────────────┼────────────────────┤
│ 0  │ test.0   │ [x] 0.0870ms       │ [x] 0.1031ms       │ [x] 0.0861ms       │ [x] 0.2754ms       │ [x] 0.2764ms       │ [x] 0.2769ms       │ [x] 0.1273ms       │ [x] 0.0923ms       │ [x] 0.0939ms       │ [x] 0.1008ms       │ [x] 0.1398ms       │ [x] 0.1819ms       │
├────┼──────────┼────────────────────┼────────────────────┼────────────────────┼────────────────────┼────────────────────┼────────────────────┼────────────────────┼────────────────────┼────────────────────┼────────────────────┼────────────────────┼────────────────────┤
│ 1  │ test.1   │ [x] 0.1255ms       │ [x] 0.1198ms       │ [x] 0.1250ms       │ [x] 0.3181ms       │ [x] 0.3095ms       │ [x] 0.3355ms       │ [x] 0.1593ms       │ [x] 0.1486ms       │ [x] 0.1781ms       │ [x] 0.1130ms       │ [x] 0.1654ms       │ [x] 0.2238ms       │
├────┼──────────┼────────────────────┼────────────────────┼────────────────────┼────────────────────┼────────────────────┼────────────────────┼────────────────────┼────────────────────┼────────────────────┼────────────────────┼────────────────────┼────────────────────┤
│ 2  │ test.2   │ [x] 1.0580ms       │ [x] 0.8332ms       │ [x] 1.0426ms       │ [x] 0.9192ms       │ [x] 0.7898ms       │ [x] 0.8907ms       │ [x] 0.3061ms       │ [x] 0.6170ms       │ [x] 0.3006ms       │ [x] 0.1480ms       │ [x] 0.2492ms       │ [x] 0.3034ms       │
├────┼──────────┼────────────────────┼────────────────────┼────────────────────┼────────────────────┼────────────────────┼────────────────────┼────────────────────┼────────────────────┼────────────────────┼────────────────────┼────────────────────┼────────────────────┤
│ 3  │ test.3   │ [x] 12.1012ms      │ [x] 8.3149ms       │ [x] 11.3168ms      │ [x] 12.1729ms      │ [x] 11.4867ms      │ [x] 11.5503ms      │ [x] 4.1201ms       │ [x] 10.6051ms      │ [x] 3.5202ms       │ [x] 1.6528ms       │ [x] 2.8343ms       │ [x] 2.1825ms       │
├────┼──────────┼────────────────────┼────────────────────┼────────────────────┼────────────────────┼────────────────────┼────────────────────┼────────────────────┼────────────────────┼────────────────────┼────────────────────┼────────────────────┼────────────────────┤
│ 4  │ test.4   │ [x] 595.1109ms     │ [x] 533.5848ms     │ [x] 586.5617ms     │ [x] 354.8837ms     │ [x] 393.6696ms     │ [x] 469.1794ms     │ [x] 11.0159ms      │ [e]                │ [x] 11.6865ms      │ [x] 6.2554ms       │ [x] 26.7523ms      │ [x] 9.2350ms       │
│    │          │                    │                    │                    │                    │                    │                    │                    │ Maximum call...    │                    │                    │                    │                    │
├────┼──────────┼────────────────────┼────────────────────┼────────────────────┼────────────────────┼────────────────────┼────────────────────┼────────────────────┼────────────────────┼────────────────────┼────────────────────┼────────────────────┼────────────────────┤
│ 5  │ test.5   │ [t] ∞ ms           │ [t] ∞ ms           │ [t] ∞ ms           │ [t] ∞ ms           │ [t] ∞ ms           │ [t] ∞ ms           │ [x] 96.3885ms      │ [e]                │ [x] 68.9220ms      │ [x] 54.5074ms      │ [x] 158.5825ms     │ [x] 52.3492ms      │
│    │          │                    │                    │                    │                    │                    │                    │                    │ Maximum call...    │                    │                    │                    │                    │
├────┼──────────┼────────────────────┼────────────────────┼────────────────────┼────────────────────┼────────────────────┼────────────────────┼────────────────────┼────────────────────┼────────────────────┼────────────────────┼────────────────────┼────────────────────┤
│ 6  │ test.6   │ [t] ∞ ms           │ [t] ∞ ms           │ [t] ∞ ms           │ [t] ∞ ms           │ [t] ∞ ms           │ [t] ∞ ms           │ [x] 1125.21ms      │ [t] ∞ ms           │ [x] 586.8808ms     │ [x] 541.6533ms     │ [x] 1733.92ms      │ [x] 603.9906ms     │
├────┼──────────┼────────────────────┼────────────────────┼────────────────────┼────────────────────┼────────────────────┼────────────────────┼────────────────────┼────────────────────┼────────────────────┼────────────────────┼────────────────────┼────────────────────┤
│ 7  │ test.7   │ [t] ∞ ms           │ [t] ∞ ms           │ [t] ∞ ms           │ [t] ∞ ms           │ [t] ∞ ms           │ [t] ∞ ms           │ [x] 14630.17ms     │ [t] ∞ ms           │ [x] 9696.94ms      │ [x] 9430.67ms      │ [x] 25657.88ms     │ [x] 13210.72ms     │
└────┴──────────┴────────────────────┴────────────────────┴────────────────────┴────────────────────┴────────────────────┴────────────────────┴────────────────────┴────────────────────┴────────────────────┴────────────────────┴────────────────────┴────────────────────┘
Test timeout is 30000 ms
```