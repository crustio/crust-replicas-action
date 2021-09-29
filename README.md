# 🚀 Crust files replicas for GitHub Actions

[GitHub Action](https://github.com/features/actions) for getting files replicas via Crust Api.

**Important**: Only support **Crust Mainnet**.

## Usage

Get files replicas via Crust Api:

```yaml
on: 
  push:
    branches:
      - main

jobs:
  test_job:
    runs-on: ubuntu-latest
    name: Testing on Crust Replicas
    steps:
      - uses: actions/checkout@v2.1.0
      - name: Crust replicas action
        id: replica
        uses: crustio/crust-replicas-action@v1.0.1
        with:
          cid: QmevJf2rdNibZCGrgeyVJEM82y5DsXgMDHXM6zBtQ6G4Vj
          crust-endpoint: 'wss://rpc.crust.network'
      - name: Print res
        run: echo "Replicas ${{ steps.replica.outputs.replicaCount }}"
```

## Input variables

See the [action.yml](./action.yml) file for more detail information.

* cid - file cid on ipfs
* crust-endpoint - the endpoint connect to crust mainnet chain


