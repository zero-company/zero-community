use anyhow::Result;
use std::path::Path;
//use tar::Archive;

pub fn unpack(path: impl AsRef<Path>) -> Result<(), anyhow::Error> {
    let path_ref = path.as_ref();
    fs_extra::dir::create_all(path_ref, true)?;

    Ok(())
}
