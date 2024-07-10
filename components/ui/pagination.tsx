import * as React from "react";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";

import { cn } from "@/lib/utils";
import { ButtonProps, buttonVariants } from "@/components/ui/button";

const PaginationWrapper = ({
  className,
  ...props
}: React.ComponentProps<"nav">) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn("mx-auto flex w-full justify-center", className)}
    {...props}
  />
);
PaginationWrapper.displayName = "PaginationWrapper";

const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn("flex flex-row items-center gap-1", className)}
    {...props}
  />
));
PaginationContent.displayName = "PaginationContent";

const PaginationItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("", className)} {...props} />
));
PaginationItem.displayName = "PaginationItem";

type PaginationLinkProps = {
  isActive?: boolean;
} & Pick<ButtonProps, "size"> &
  React.ComponentProps<"a">;

const PaginationLink = ({
  className,
  isActive,
  size = "icon",
  ...props
}: PaginationLinkProps) => (
  <a
    aria-current={isActive ? "page" : undefined}
    className={cn(
      buttonVariants({
        variant: isActive ? "outline" : "ghost",
        size,
      }),
      className
    )}
    {...props}
  />
);
PaginationLink.displayName = "PaginationLink";

const PaginationPrevious = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to previous page"
    size="default"
    className={cn("gap-1 pl-2.5", className)}
    {...props}
  >
    <ChevronLeft className="h-4 w-4" />
    <span>Previous</span>
  </PaginationLink>
);
PaginationPrevious.displayName = "PaginationPrevious";

const PaginationNext = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to next page"
    size="default"
    className={cn("gap-1 pr-2.5", className)}
    {...props}
  >
    <span>Next</span>
    <ChevronRight className="h-4 w-4" />
  </PaginationLink>
);
PaginationNext.displayName = "PaginationNext";

const PaginationEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    aria-hidden
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More pages</span>
  </span>
);
PaginationEllipsis.displayName = "PaginationEllipsis";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  baseHref: string;
  countToShow?: number;
}

const { floor, min, max } = Math;
const range = (lo: number, hi: number) =>
  Array.from({ length: hi - lo }, (_, i) => i + lo);

const ellipsis = "…";

const pagination = (count: number) => (page: number, total: number) => {
  const start = max(1, min(page - floor((count - 3) / 2), total - count + 2));
  const end = min(total, max(page + floor((count - 2) / 2), count - 1));
  return [
    ...(start > 2 ? [1, ellipsis] : start > 1 ? [1] : []),
    ...range(start, end + 1),
    ...(end < total - 1 ? [ellipsis, total] : end < total ? [total] : []),
  ];
};

const Pagination = ({
  currentPage,
  totalPages,
  baseHref,
  countToShow = 4,
}: PaginationProps) => (
  <PaginationWrapper>
    <PaginationContent>
      {currentPage !== 1 && (
        <PaginationItem>
          <PaginationPrevious
            href={`${baseHref}?pageIndex=${currentPage - 1}`}
          />
        </PaginationItem>
      )}
      {pagination(countToShow)(currentPage, totalPages).map((item) => (
        <PaginationItem
          key={item}
          className={cn("rounded", {
            "bg-primary text-white": currentPage === item,
          })}
        >
          {item === ellipsis ? (
            <PaginationEllipsis />
          ) : (
            <PaginationLink href={`${baseHref}?pageIndex=${item}`}>
              {item}
            </PaginationLink>
          )}
        </PaginationItem>
      ))}

      {currentPage !== totalPages && (
        <PaginationItem>
          <PaginationNext href={`${baseHref}?pageIndex=${currentPage + 1}`} />
        </PaginationItem>
      )}
    </PaginationContent>
  </PaginationWrapper>
);

export {
  Pagination,
  PaginationWrapper,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
};
