initSidebarItems({"enum":[["PodCastError","The things that can go wrong when casting between [`Pod`] data forms."]],"fn":[["bytes_of","Re-interprets `&T` as `&[u8]`."],["bytes_of_mut","Re-interprets `&mut T` as `&mut [u8]`."],["cast","Cast `T` into `U`"],["cast_mut","Cast `&mut T` into `&mut U`."],["cast_ref","Cast `&T` into `&U`."],["cast_slice","Cast `&[A]` into `&[B]`."],["cast_slice_mut","Cast `&mut [T]` into `&mut [U]`."],["from_bytes","Re-interprets `&[u8]` as `&T`."],["from_bytes_mut","Re-interprets `&mut [u8]` as `&mut T`."],["pod_align_to","As `align_to`, but safe because of the [`Pod`] bound."],["pod_align_to_mut","As `align_to_mut`, but safe because of the [`Pod`] bound."],["try_cast","Try to cast `T` into `U`."],["try_cast_mut","Try to convert a `&mut T` into `&mut U`."],["try_cast_ref","Try to convert a `&T` into `&U`."],["try_cast_slice","Try to convert `&[A]` into `&[B]` (possibly with a change in length)."],["try_cast_slice_mut","Try to convert `&mut [A]` into `&mut [B]` (possibly with a change in length)."],["try_from_bytes","Re-interprets `&[u8]` as `&T`."],["try_from_bytes_mut","Re-interprets `&mut [u8]` as `&mut T`."]],"macro":[["offset_of","Find the offset in bytes of the given `$field` of `$Type`. Requires an already initialized `$instance` value to work with."]],"trait":[["Contiguous","A trait indicating that:"],["Pod","Marker trait for “plain old data”."],["TransparentWrapper","A trait which indicates that a type is a `#[repr(transparent)]` wrapper around the `Inner` value."],["Zeroable","Trait for types that can be safely created with `zeroed`."]]});