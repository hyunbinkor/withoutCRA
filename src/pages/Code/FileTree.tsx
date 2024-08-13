import FileTreeDocumentHeader from "./FileTreeDocumentHeader";
import FileTreeDocumentTab from "./FileTreeDocumentTab";
import FileTreeDocumentLine from "./FileTreeDocumentLine";

import getFileTree from "@/utils/api/getFileTree";

function FileTree() {

  const fileTree = getFileTree();

  return (
    <main className="filetree">
      <table className="filetree-table">
        <thead>
          <FileTreeDocumentHeader />
        </thead>
        <tbody>
          <FileTreeDocumentTab />
          {fileTree.map((file) => FileTreeDocumentLine(file))}
        </tbody>
      </table>
    </main>
  );
};

export default FileTree;