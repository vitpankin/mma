import { FirestoreProvider } from './provider'
import { db, analytics } from './firestore'
import { useAddDocument } from './hooks/useAddDocument'
import { useGetDocuments } from './hooks/useGetDocuments'

export { db, analytics, FirestoreProvider, useAddDocument, useGetDocuments }