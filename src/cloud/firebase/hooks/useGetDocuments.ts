import { useState, useEffect } from 'react';
import { collection, getDocs, DocumentData } from 'firebase/firestore';
import { db } from '../firestore';

interface UseGetDocumentsResult<T> {
  documents: T[];
  loading: boolean;
  error: Error | null;
}

export const useGetDocuments = <T extends DocumentData>(collectionName: string): UseGetDocumentsResult<T> => {
  const [documents, setDocuments] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchDocuments = async () => {
      setLoading(true);
      try {
        const querySnapshot = await getDocs(collection(db, collectionName));
        const docs = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as unknown as T));
        setDocuments(docs);
        setLoading(false);
      } catch (err) {
        setError(err as Error);
        setLoading(false);
      }
    };

    fetchDocuments();
  }, [collectionName]);

  return { documents, loading, error };
};