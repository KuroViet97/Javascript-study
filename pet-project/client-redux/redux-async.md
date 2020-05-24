# Actions

- 2 crucial states:
    - start the call
    - receive and answer (or timeout)

## Types of actions
1. Request began: a flag is marked to show a spinner (loading)
2. Request finished successfully: reset flag & display fetched data
3. Request failed: reset flag, display err message