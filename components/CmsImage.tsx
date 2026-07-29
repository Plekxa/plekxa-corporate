type Props = { src?: string | null; className?: string; alt?: string; fallbackClass?: string };
export function CmsImage({src,className="",alt="",fallbackClass=""}:Props){
  if(!src) return <div className={`${className} ${fallbackClass}`} role="img" aria-label={alt}/>;
  return <div className={className} role="img" aria-label={alt} style={{backgroundImage:`linear-gradient(180deg,transparent 40%,rgba(0,0,0,.38)),url(${src})`,backgroundSize:"cover",backgroundPosition:"center"}}/>;
}
