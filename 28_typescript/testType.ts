class DataStore<T> {
  private data: T[] = [];

  add(item: T): void {
    this.data.push(item);
  }

  getAll(): T[] {
    return this.data;
  }
}

const stringStore = new DataStore<string>();
stringStore.add("TypeScript");
stringStore.add("Generics");

console.log(stringStore.getAll());

const numberStore = new DataStore<number>();
numberStore.add(42);
numberStore.add(48);
console.log(numberStore.getAll());

interface KeyValue<K, V> {
  key: K;
  value: V;
}
const numberKeyValue: KeyValue<number, string> = { key: 1, value: "One" };
const stringKeyValue: KeyValue<string, boolean> = {
  key: "isOpen",
  value: true,
};

console.log("🚀 ~ numberKeyValue:", numberKeyValue);
console.log("🚀 ~ stringKeyValue:", stringKeyValue);

function mergeObjects<T extends object, U extends object>(
  obj1: T,
  obj2: U
): T & U {
  return { ...obj1, ...obj2 };
}
const merged = mergeObjects({ name: "Alice" }, { age: 30 });
console.log("🚀 ~ merged:", merged);

interface Personn {
  name: string;
  age: number;
}

interface Employeee extends Personn {
  employeeId: number;
  department: string;
}

const developer: Employeee = {
  name: "Jonh",
  age: 25,
  employeeId: 123,
  department: "Software Development",
};
console.log("🚀 ~ developer:", developer);

// ----------

type Status = "success" | "error" | "loading";

function getStatus(status: Status): string {
  switch (status) {
    case "success":
      return "The operation was succcessful";
    case "error":
      return "There was an error";
    case "loading":
      return "Loading...";
  }
}

console.log(getStatus("success"));
