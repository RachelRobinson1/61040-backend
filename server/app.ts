import ChatConcept from "./concepts/chat";
import CollectionConcept from "./concepts/collection";
import FriendConcept from "./concepts/friend";
import PostConcept from "./concepts/post";
import Q_AConcept from "./concepts/q&a";
import ReactionConcept from "./concepts/reaction";
import UserConcept from "./concepts/user";
import WebSessionConcept from "./concepts/websession";

// App Definition using concepts
export const WebSession = new WebSessionConcept();
export const User = new UserConcept();
export const Post = new PostConcept();
export const Friend = new FriendConcept();
export const Collection = new CollectionConcept();
export const Chat = new ChatConcept();
export const Reaction = new ReactionConcept();
export const Q_A = new Q_AConcept();
