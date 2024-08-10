const schedule = require("node-schedule")

const rule = new schedule.RecurrenceRule()

rule.dayOfWeek = [new schedule.Range(0,6)] // sunday to saturday
rule.hour = 20
rule.second = 30

const task = schedule.scheduleJob(rule, () => {
  console.log("Executing task.", new Date().getSeconds())
})