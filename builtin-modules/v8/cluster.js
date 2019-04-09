export default cluster
export const {
  Worker,
  disconnect,
  fork,
  isMaster,
  isWorker,
  settings,
  setupMaster,
  workers,
} = cluster