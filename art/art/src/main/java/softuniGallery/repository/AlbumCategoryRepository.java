package softuniGallery.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import softuniGallery.entity.AlbumCategory;

public interface AlbumCategoryRepository extends JpaRepository<AlbumCategory, Integer> {
}
