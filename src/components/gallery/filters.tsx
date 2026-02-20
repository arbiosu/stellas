'use client';

import { type Category, categories } from '@/lib/gallery';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Badge } from '@/components/ui/badge';

interface GalleryFiltersProps {
  activeCategory: Category;
  onCategoryChange: (category: Category) => void;
  counts: Record<Category, number>;
}

export function GalleryFilters({
  activeCategory,
  onCategoryChange,
  counts,
}: GalleryFiltersProps) {
  return (
    <ToggleGroup
      type='single'
      value={activeCategory}
      onValueChange={(value: Category) => {
        if (value) onCategoryChange(value);
      }}
      variant='outline'
      className='flex-wrap'
    >
      {categories.map((cat) => (
        <ToggleGroupItem
          key={cat.value}
          value={cat.value}
          aria-label={`Filter by ${cat.label}`}
          className='gap-2 px-4'
        >
          {cat.label}
          <Badge
            variant={activeCategory === cat.value ? 'default' : 'secondary'}
            className='px-1.5 py-0 text-[10px]'
          >
            {counts[cat.value]}
          </Badge>
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  );
}
