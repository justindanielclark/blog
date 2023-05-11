type Props = {
  className?: string;
};
function Header({ className }: Props) {
  return <div className={className || ""}>Header</div>;
}

export default Header;
