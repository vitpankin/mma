import { useState } from 'react';
import { collection, addDoc, DocumentReference, DocumentData } from 'firebase/firestore';
import { db } from '../firestore';

interface UseAddDocumentResult<T> {
  addDocument: (data: T) => Promise<DocumentReference<T> | void>;
  loading: boolean;
  error: Error | null;
}

export const useAddDocument = <T extends DocumentData>(collectionName: string): UseAddDocumentResult<T> => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const addDocument = async (data: T): Promise<DocumentReference<T> | void> => {
    setLoading(true);
    try {
      const docRef = await addDoc(collection(db, collectionName), data);
      setLoading(false);
      return docRef as DocumentReference<T>;
    } catch (err) {
      setError(err as Error);
      setLoading(false);
    }
  };

  return { addDocument, loading, error };
};