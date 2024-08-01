const Router = () => {
    const [page, setPage] = useState('/');
    const [isPending, startTransition] = useTransition();
  
    function navigate(url) {
      startTransition(() => {
        setPage(url);
      });
    }
  
    return (
      <div>
        <Navbar navigate={navigate} />
        <div>
          {isPending ? <div>Loading...</div> : <PageRenderer page={page} />}
        </div>
      </div>
    );
  };
  
  const PageRenderer = ({ page }) => {
    switch (page) {
      case '/':
        return <Home />;
      case '/about-us':
        return <AboutUs />;
      default:
        return <div>404 - Page Not Found</div>;
    }
  };
  