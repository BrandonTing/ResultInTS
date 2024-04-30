class Result<T, E> {
    #ok: T | null; // value  
    #err: E | null; // error

    constructor(ok: T | null, err: E | null) {
        this.#ok = ok
        this.#err = err
    }

    unwrap(): T {
        if (!this.#ok) {
            throw new Error("Unwrap error")
        }
        return this.#ok
    }

    isOk(): this is Result<T, never> {
        return !!this.#ok
    };

    isErr(): this is Result<never, E> {
        return !!this.#err
    };

    getErr(): E | null {
        return this.#err
    };

}