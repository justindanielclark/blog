type Props = {
  className?: string;
};
function Footer({ className }: Props) {
  return <div className={className || ""}>Footer</div>;
}

export default Footer;
