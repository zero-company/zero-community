pub fn main() {
    let root_dir: std::path::PathBuf = std::env::var("CARGO_MANIFEST_DIR").unwrap().into();
    let output_dir = root_dir.join("dist\\unpack_crates");
    let _ = unpack_crates::unpack(output_dir);
    println!("[unpack-crates] Test Complete");
}
