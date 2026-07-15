type Status = "idle" | "ready";

export class Session {
  readonly status: Status = "ready";

  constructor(private readonly name: string) {}

  describe(count = 1): string {
    return `${this.name}: ${count}`;
  }
}

export const validId = /^[a-z][a-z0-9-]+$/i;
