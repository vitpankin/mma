import { useState } from 'react';
import { doc, deleteDoc, DocumentReference, DocumentData } from 'firebase/firestore';
import { db } from '../firestore';

export const useDeleteDocument = (collectionName: string) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const deleteDocument = async (id: string): Promise<void> => {
    setLoading(true);
    try {
      const docRef: DocumentReference<DocumentData> = doc(db, collectionName, id) as DocumentReference<DocumentData>;
      await deleteDoc(docRef);
      setLoading(false);
    } catch (err) {
      setError(err as Error);
      setLoading(false);
    }
  };

  return { deleteDocument, loading, error };
};