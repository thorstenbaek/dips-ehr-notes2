import type ResultSet from "./utils/ResultSet";
import {writable, Writable} from "svelte/store";

export const documents: Writable<ResultSet> = writable(null);