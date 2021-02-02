class Message < ApplicationRecord
  belongs_to :group
  belongs_to :user

  validates :content, presence: true, unless: :image?
<<<<<<< HEAD

  mount_uploader :image, ImageUploader
=======
>>>>>>> message-device
end
