
import { createContext, useContext, ReactNode } from 'react';
import { useAddDocument, useGetDocuments, useUpdateDocument, useDeleteDocument } from './hooks';
import { DocumentData } from 'firebase/firestore';

interface FirestoreContextProps {
  addDocumentHook: (collectionName: string) => ReturnType<typeof useAddDocument>;
  getDocumentsHook: (collectionName: string) => ReturnType<typeof useGetDocuments>;
  updateDocumentHook: <T extends DocumentData>(collectionName: string) => ReturnType<typeof useUpdateDocument<T>>;
  deleteDocumentHook: (collectionName: string) => ReturnType<typeof useDeleteDocument>;
}

const FirestoreContext = createContext<FirestoreContextProps | undefined>(undefined);

export const FirestoreProvider = ({ children }: { children: ReactNode }) => {
  const addDocumentHook = useAddDocument;
  const getDocumentsHook = useGetDocuments;
  const updateDocumentHook = useUpdateDocument;
  const deleteDocumentHook = useDeleteDocument;

  return (
    <FirestoreContext.Provider value={{ addDocumentHook, getDocumentsHook, updateDocumentHook, deleteDocumentHook }}>
      {children}
    </FirestoreContext.Provider>
  );
};

export const useFirestore = () => {
  const context = useContext(FirestoreContext);
  if (!context) {
    throw new Error('useFirestore must be used within a FirestoreProvider');
  }
  return context;
};