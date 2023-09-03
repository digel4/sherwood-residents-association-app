import { blogRepo } from "@/repos/blogRepo";

export const blogService = {
  getAllBlogItems,
  removeBlogItemById,
  getBlogItemById
}

async function getAllBlogItems() {
  return blogRepo.getAllBlogItems();
}

async function getBlogItemById(id: string) {
  return blogRepo.getBlogItemById(id);
}

async function removeBlogItemById(id: string) {
  return blogRepo.removeBlogItemById(id);
}