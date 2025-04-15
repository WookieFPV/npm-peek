import type { LocalContext } from "./context";

interface CommandFlags {
    readonly count: number;
}

export default async function(this: LocalContext, flags: CommandFlags, name: string): Promise<void> {
    this.process.stdout.write(`Hello ${name}!\n`.repeat(flags.count));
}
