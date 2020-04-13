class AddProducts < ActiveRecord::Migration[6.0]
  def change
  	#писать или в одну строку, или атрибуты каждого Product... в скобках ({ ... })
  	Product.create :title => 'Some_1', :description => 'It is great!', :price => 330, :size => 30, :is_spicy => false, :is_veg => false, :is_best_offer => true, :path_to_image => '/images/photo_1.jpeg'

  	Product.create :title => 'Some_2', :description => 'It is nice!', :price => 370, :size => 700, :is_spicy => true, :is_veg => false, :is_best_offer => true, :path_to_image => '/images/photo_2.jpeg'

  	Product.create :title => 'Some_2_Big', :description => 'It is very good!', :price => 330, :size => 30, :is_spicy => true, :is_veg => true, :is_best_offer => true, :path_to_image => '/images/photo_3.jpeg'
  end
end
