import { Child, Parent, Role } from "./role";
import { BankAccount } from "./bank-account";
import { Task } from "./task";
import { Wish } from "./wish";
import { Completion } from "./completion";

export * from "./bank-account";
export * from "./completion";
export * from "./role";
export * from "./task";
export * from "./transaction";

const BANK_BIC = "TESTBICXXXX";

const BANK_ACCOUNT_CHILD = new BankAccount("DE00999940000000001135", BANK_BIC);
const BANK_ACCOUNT_PARENT = new BankAccount("DE00999940000000001128", BANK_BIC);

const SOHN = new Child("Carli", BANK_ACCOUNT_CHILD, [
  new Wish("Playstation 4", 17500),
  new Wish("Fahrrad", 45500),
  new Wish("Snowboard", 21500)
]);
SOHN.ratio = 25;
const MUTTER = new Parent("Mama Sabrina", BANK_ACCOUNT_PARENT);
const VATER = new Parent("Papa David", BANK_ACCOUNT_PARENT);

export const USERS = [SOHN, MUTTER];

function doneTask(task) {
  if (task instanceof Task) {
    task.child = SOHN;
    task.done();
    task.paid();
  }
}
function doneTasks(tasks) {
  if (Array.isArray(tasks)) {
    tasks.forEach(task => {
      doneTask(task);
    });
  }
}

export const DONE_TASKS = [
  new Task("Gassi gehen", 300, MUTTER, require("../assets/icon-dog.png")),
  new Task("Zimmer aufräumen", 500, MUTTER, require("../assets/icon-clean.png")),
  new Task("Gassi gehen", 300, MUTTER, require("../assets/icon-dog.png")),
  new Task("Obstbäume schneiden", 3000, MUTTER, require("../assets/icon-clean.png")),
  new Task("Gassi gehen", 300, MUTTER, require("../assets/icon-dog.png")),
  new Task("Zimmer aufräumen", 500, MUTTER, require("../assets/icon-clean.png")),
  new Task("Gassi gehen", 300, MUTTER, require("../assets/icon-dog.png")),
  new Task("Zimmer aufräumen", 500, MUTTER, require("../assets/icon-clean.png")),
  new Task("Gassi gehen", 300, MUTTER, require("../assets/icon-dog.png")),
  new Task("Zimmer aufräumen", 500, MUTTER, require("../assets/icon-clean.png")),
  new Task("Gassi gehen", 300, MUTTER, require("../assets/icon-dog.png")),
  new Task("Zimmer aufräumen", 500, MUTTER, require("../assets/icon-clean.png")),
  new Task("Gassi gehen", 300, MUTTER, require("../assets/icon-dog.png")),
  new Task("Zimmer aufräumen", 500, MUTTER, require("../assets/icon-clean.png")),
  new Task("Gassi gehen", 300, MUTTER, require("../assets/icon-dog.png")),
  new Task("Zimmer aufräumen", 500, MUTTER, require("../assets/icon-clean.png"))
];
doneTasks(DONE_TASKS);

export const TASKS = [
  new Task(
    "Müll rausbringen",
    200,
    MUTTER,
    require("../assets/icon-clean.png")
  ),
  new Task(
    "Garage aufräumen",
    1500,
    MUTTER,
    require("../assets/icon-clean.png")
  ),
  new Task("Rasen mähen", 2000, MUTTER, require("../assets/icon-lawn.png")),
  new Task(
    "Wäsche sortieren",
    700,
    MUTTER,
    require("../assets/icon-laundry.png")
  )
].concat(DONE_TASKS);

let completion = new Completion(MUTTER, DONE_TASKS);

export const COMPLETIONS = [completion];

export const DATA = {
  completions: COMPLETIONS,
  users: USERS,
  tasks: TASKS
};

// console.log(JSON.stringify(DATA));
