import Editor from "../components/Editor";

export default function IndexPage() {
  return (
    <div>
      <Editor />
      <style jsx global>{`
        body {
          padding: 0;
          margin: 0;
        }
      `}</style>
    </div>
  );
}
