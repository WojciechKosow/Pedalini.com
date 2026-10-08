type CourseCardProps = {
  title: string;
  description: string;
  category: string;
  level: string;
  price: number;
  rating: number;
  image: string;
  trending?: boolean;
  creatorName: string;
  creatorAvatar: string;
};

const CourseCard = ({
  title,
  description,
  category,
  level,
  price,
  rating,
  image,
  trending = false,
  creatorName,
  creatorAvatar,
}: CourseCardProps) => {
  const stars = Math.min(5, Math.max(0, Math.round(rating)));

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl bg-[#13141f] transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/60">
      <div className="relative aspect-[2/1] overflow-hidden bg-[#0d0f1a]">
        <img
          src={image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#13141f] via-[#13141f]/60 via-30% to-transparent to-70%" />

        {trending && (
          <span className="absolute left-3 top-3 rounded-md bg-amber-500 px-2 py-1 text-[11px] font-bold uppercase tracking-wider text-black">
            Trending
          </span>
        )}
        <span className="absolute right-3 top-3 rounded-md border border-white/10 bg-black/50 px-2 py-1 text-xs text-gray-400 backdrop-blur-sm">
          {level}
        </span>
      </div>

      <div className="flex flex-1 flex-col px-4 pb-4 pt-3">
        <p className="text-xs font-medium text-teal-500">{category}</p>
        <h3 className="mt-2 line-clamp-2 text-base font-bold leading-snug text-white">
          {title}
        </h3>
        <p className="mt-1.5 line-clamp-2 text-sm text-gray-400">
          {description}
        </p>

        <div className="mt-auto flex items-center justify-between gap-3 pt-3">
          <div className="flex min-w-0 items-center gap-2">
            <img
              src={creatorAvatar}
              alt=""
              className="h-5 w-5 shrink-0 rounded-full object-cover"
            />
            <span className="truncate text-xs text-gray-400">
              {creatorName}
            </span>
          </div>

          <div className="flex shrink-0 items-center gap-3">
            <div className="flex items-center gap-1.5 text-xs">
              <span className="text-[10px] tracking-[0.2em] text-amber-500">
                {"★".repeat(stars)}
                <span className="text-gray-600">{"★".repeat(5 - stars)}</span>
              </span>
              <span className="text-gray-400">{rating.toFixed(1)}</span>
            </div>
            <span className="text-sm font-bold text-white">${price}</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CourseCard;
