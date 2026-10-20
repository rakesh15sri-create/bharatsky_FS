import { Button, Muted, PageHero, useTitle } from '../components/ui';

export default function NotFound() {
  useTitle('Page Not Found');
  return (
    <PageHero
      crumb="404"
      chip="Error 404"
      title={<>Page Not<br /><Muted>Found.</Muted></>}
      sub="The Page You’re Looking For Doesn’t Exist Or Has Been Moved."
    >
      <Button to="/">Back to home</Button>
      <Button to="/contact" variant="outline">Contact us</Button>
    </PageHero>
  );
}
