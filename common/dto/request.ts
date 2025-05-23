// These types are re-exported for the sake of compile-time type checking.
// No actual implementation code leaks into the frontend bundle.
import type {IncidentDTO} from "../../backend/src/dto/incident-dto";
import type {PostDTO} from "../../backend/src/dto/post-dto";

export type { IncidentDTO as NewIncidentDTO, PostDTO as NewPostDTO };