import FileTreeDocumentHeader from "./FileTreeDocumentHeader";
import FileTreeDocumentTab from "./FileTreeDocumentTab";
import FileTreeDocumentLine from "./FileTreeDocumentLine";

import getFileTree from "@/utils/api/getFileTree";

import '@/pages/Code/FileTree.css'

function FileTree() {

  const fileTree = getFileTree();

  return (
    <main className="filetree" style={{width: '100%'}}>
      <table className="filetree-table" style={{borderCollapse: 'collapse', width: '100%'}}>
        <tbody>
          <FileTreeDocumentTab />
          {fileTree.map((file) => FileTreeDocumentLine(file))}
        </tbody>
      </table>
    </main>
  );
};

export default FileTree;