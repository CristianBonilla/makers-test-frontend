function FooterLayout() {
  const year = new Date().getFullYear();

  return (
    <footer className='footer'>
      <div className='footer_content'>
        <p className='footer_text'>
          Copyright <strong>&copy;</strong> Makers Dev Inc. {year} All rights reserverd
        </p>
      </div>
    </footer>
  );
}

export default FooterLayout;
