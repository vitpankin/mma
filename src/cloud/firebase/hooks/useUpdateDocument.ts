import { useState } from 'react';
import { doc, updateDoc, DocumentReference, DocumentData } from 'firebase/firestore';
import { db } from '../firestore';

export const useUpdateDocument = <T extends DocumentData>(collectionName: string) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const updateDocument = async (id: string, data: Partial<T>): Promise<void> => {
    setLoading(true);
    try {
      const docRef: DocumentReference<DocumentData> = doc(db, collectionName, id);
      await updateDoc<DocumentData, DocumentData>(docRef, data);
      setLoading(false);
    } catch (err) {
      setError(err as Error);
      setLoading(false);
    }
  };

  return { updateDocument, loading, error };
};