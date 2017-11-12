class StateApi {
  constructor(rawData) {
    this.data = rawData

    // Manage subscriptions to store
    this.subscriptions = {}
    this.lastSubscriptionId = 0
  }

  getState = () => {
    return this.data
  }

  subscribe = (cb) => {
    this.lastSubscriptionId++
    this.subscriptions[this.lastSubscriptionId] = cb
    return this.lastSubscriptionId
  }

  unsubscribe = (subscriptionId) => {
    delete this.subscriptions[subscriptionId]
  }

  notifySubscribers = () => {
    // cb comes from client
    Object.values(this.subscriptions).forEach((cb) => cb())
  }

  mergeWithState = (stateChange) => {
    this.data = {
      ...this.data,
      ...stateChange
    }
    this.notifySubscribers()
  }

  // startClock = () => {
  //   setInterval(() => {
  //     this.mergeWithState({
  //       timestamp: new Date()
  //     })
  //   }, 1000)
  // }
}

export default StateApi;