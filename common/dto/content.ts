// These types are re-exported for the sake of compile-time type checking.
// No actual implementation code leaks into the frontend bundle.
import type {Community, Post, PostComment, Incident, IncidentComment, DetailedPost} from "../../backend/src/types";
export type {Community, Post, PostComment, Incident, IncidentComment, DetailedPost};

