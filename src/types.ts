import { Timestamp } from "firebase/firestore";

export interface User {
  displayName: string
  email: string
  photoURL: string
  uid: string
}

export interface Message {
  author: string
  content: string
  createdAt: Timestamp
}