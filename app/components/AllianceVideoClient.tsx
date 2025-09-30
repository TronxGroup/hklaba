'use client'

export default function AllianceVideoClient({ videoId, title }: { videoId: string; title: string }) {
  return (
    <div className="aspect-video w-full overflow-hidden rounded-2xl border border-neutral-200 bg-white">
      <iframe
        className="h-full w-full"
        loading="lazy"
        src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&controls=1&mute=1&autoplay=0&loop=1&playlist=${videoId}`}
        title={title}
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      />
    </div>
  )
}
