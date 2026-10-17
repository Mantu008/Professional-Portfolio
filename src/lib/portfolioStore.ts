import { useCallback, useEffect, useState } from "react";

/* ---------- tiny pub/sub so every component stays in sync ---------- */
const bus = new EventTarget();
const emit = (name: string) => bus.dispatchEvent(new Event(name));

function useSubscribe(name: string, cb: () => void) {
    useEffect(() => {
        bus.addEventListener(name, cb);
        return () => bus.removeEventListener(name, cb);
    }, [name, cb]);
}

/* ---------- edit mode (per browser) ---------- */
const EDIT_KEY = "portfolio:editMode";
const readEdit = () => {
    try {
        return localStorage.getItem(EDIT_KEY) === "1";
    } catch {
        return false;
    }
};

export function useEditMode() {
    const [editMode, setState] = useState(readEdit);
    const sync = useCallback(() => setState(readEdit()), []);
    useSubscribe("edit", sync);
    const setEditMode = useCallback((v: boolean) => {
        try {
            localStorage.setItem(EDIT_KEY, v ? "1" : "0");
        } catch {
            /* ignore */
        }
        emit("edit");
    }, []);
    return { editMode, setEditMode };
}
