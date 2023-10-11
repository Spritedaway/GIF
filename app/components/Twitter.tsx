export default function Twitter({ className }: { className?: string }) {
  return (
    <a
      href='https://twitter.com/deepwhitman'
      target='_blank'
      rel='noopener noreferrer'
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='20'
        height='20'
        fill='currentColor'
        viewBox='0 0 24 24'
        className={className}
      >
        <path d='M23.954 4.569c-.885.389-1.83.654-2.828.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.917 2.203-4.917 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.823-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.085.631 1.953 2.445 3.376 4.604 3.415-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.055 0 14-7.496 14-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z' />
      </svg>
    </a>
  )
}
