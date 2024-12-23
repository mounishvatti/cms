const Loading = () => {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-6 p-2 md:p-10">
        <div className="w-full max-w-sm">
          <span className="loading loading-spinner text-error"></span>
        </div>
      </div>
    );
  };
  
  export default Loading;